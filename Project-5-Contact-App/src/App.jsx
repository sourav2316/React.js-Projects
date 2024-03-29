import "./App.css";
import NavBar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/fireBase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filterContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filterContacts);

      return filterContacts;
    });
  };

  return (
    <div className="max-w-[400px] m-[auto]">
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex gap-2">
          <div className="relative flex-grow flex items-center">
            <FiSearch className="absolute ml-1 text-white text-3xl" />
            <input
              onChange={filterContacts}
              type="text"
              className=" h-10 flex-grow rounded-md border  border-white bg-transparent text-white pl-10 outline-none"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
