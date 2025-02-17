import {useContext} from 'react';
import {ContactContext} from "../App.jsx";
import {Link} from "react-router-dom";

function ContactList() {
    const {contacts} = useContext(ContactContext);
    return (
        <div id={"contact-list"}>
            {contacts ? contacts.map((contact, index) => (
                <div key={index}>
                    <p>{contact.firstName} {contact.lastName}</p>
                    <Link to={"/view/" + contact.id}><button>View</button></Link>
                </div>
            )) : <p>Loading...</p>}
        </div>
    );
}

export default ContactList;
