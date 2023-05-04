import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import router from "@/router";
import { addDoc, doc, getDoc, setDoc, collection } from "firebase/firestore/lite";


export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        userDataFirestore: null,
        curentUser: null,
        roles: null
    }),

    getters: {

    },

    actions: {
        async registerUser(email, lastName, name, password,  rol) {
            try {
                const createUser = await createUserWithEmailAndPassword(auth, email, password)
                const respuesta = createUser.user

                console.log(respuesta);

                this.userData = {
                    email: respuesta.email,
                    uid: respuesta.uid
                }

                const objectDoc = {
                    email: email,
                    lastName: lastName,
                    name: name,
                    rol: rol,
                }

                const docRef  = doc(db, `usuarios/${respuesta.uid}`)
                setDoc(docRef, objectDoc)

                

                router.push("/login")


            } catch (error) {
                console.log(error)

                return error.code
            }
        },

        async setUser(user){
            try {
                const docRef = doc(db, `usuarios/${user.uid}`);

                this.userData = {
                    email: user.email,
                    lastName: user.lastName,
                    name: user.name,
                    rol: user.rol,
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

                        const docRef = doc(db, `usuarios/${user.uid}`)
                        const docSnap = await getDoc(docRef);
                        const final = docSnap.data().rol;
                        this.userData = {
                            email: user.email,
                            uid: user.uid,
                            rol: final
                            // displayName: user.displayName,
                            // photoURL: user.photoURL
                        };
                        this.roles = this.userData.rol
                        console.log(this.userData.rol)
                        console.log(this.roles)
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