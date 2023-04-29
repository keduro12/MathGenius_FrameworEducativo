import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import router from "@/router";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";


export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        curentUser: null,
        aemail: null,
    }),

    getters: {

    },

    actions: {
        async registerUser(email, password) {
            try {
                const createUser = await createUserWithEmailAndPassword(auth, email, password)
                const respuesta = createUser.user

                this.userData = {
                    email: respuesta.email,
                    uid: respuesta.uid
                }

                router.push("login")


            } catch (error) {
                console.log(error)

                return error.code
            }
        },

        async setUser(user){
            try {
                const docRef = doc(db, "users", user.uid);

                this.userData = {
                    email: user.email,
                    uid: user.uid,
                }


                await setDoc(docRef, this.userData)
                
            } catch (error) {
                console.log(error)

                return error.code
            }
        },

        async startSesion(email, password) {
            try {
                const Sesion = await signInWithEmailAndPassword(auth, email, password)
                const respuesta = Sesion.user;
                

                await this.setUser(respuesta)
                this.userData = {
                    email: respuesta.email,
                    uid: respuesta.uid
                }

                router.push("/")

            } catch (error) {
                console.log(error)

                return error.code
            }
        },

        async finishSesion() {
            try {
                
                await signOut(auth);
                this.userData = null;
                router.push("/login")

            } catch (error) {
                console.log(error);

                return error.code
            }
        },

        currentUser() {

            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(auth, async user => {
                    console.log(this.userData)
                    if (user) {
                        await this.setUser(user)
                        this.userData = {
                            email: user.email,
                            uid: user.uid,
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        };

                        this.aemail = this.userData.email;
                        this.adisplayName = this.userData.displayName;
                        this.aphotoURL = this.userData.photoURL;
                        console.log(this.userData)
                    } else {
                        this.userData = null;
                        console.log(this.userData)
                    }
                    resolve(user);
                }, e => reject(e))
                unsuscribe()
            })
        }


    }


})