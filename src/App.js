import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from 'framer-motion';
import { Modal } from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)
    const location = useLocation();
    const [pizza, setPizza] = useState({ base: '', toppings: [] });
console.log('¡');
    const addBase = (base) => {
        setPizza({ ...pizza, base });
    };

    const addTopping = (topping) => {
        let newToppings;
        if (!pizza.toppings.includes(topping)) {
            newToppings = [...pizza.toppings, topping];
        } else {
            newToppings = pizza.toppings.filter((item) => item !== topping);
        }
        setPizza({ ...pizza, toppings: newToppings });
    };

    return (
        <>
            <Header />
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
                <Switch location={location} key={location.key}>
                    <Route path="/base">
                        <Base addBase={addBase} pizza={pizza} />
                    </Route>
                    <Route path="/toppings">
                        <Toppings addTopping={addTopping} pizza={pizza} />
                    </Route>
                    <Route path="/order">
                        <Order pizza={pizza} setShowModal={setShowModal} />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBcIHDRLeHF_NmTrA24Sj7TmXX9ckNjTLM",
//   authDomain: "aguamar-juguetes.firebaseapp.com",
//   projectId: "aguamar-juguetes",
//   storageBucket: "aguamar-juguetes.appspot.com",
//   messagingSenderId: "1020898082160",
//   appId: "1:1020898082160:web:770ae77f52800fa3f0a3b5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
