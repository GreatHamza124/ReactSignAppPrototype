import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, collection, addDoc } from "./firebaseConfig";

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Save User Data to Firestore
    const saveUserData = async () => {
        try {
            await addDoc(collection(db, "users"), { email });
            Alert.alert("Success", "User saved in Firestore!");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    // Signup Function
    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            saveUserData(); // Save user to Firestore after signup
            Alert.alert("Success", "Account created successfully!");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    // Login Function
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Logged in successfully!");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* App Title */}
            <Text style={styles.title}>Financial Tracker</Text>

            {/* Email Input */}
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail} placeholder="Enter your email" />

            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry onChangeText={setPassword} placeholder="Enter your password" />

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <Button title="Sign Up" onPress={handleSignup} color="#4CAF50" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleLogin} color="#2196F3" />
            </View>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#f4f4f4",
        marginBottom: 30,
    },
    label: {
        fontSize: 18,
        alignSelf: "flex-start",
        marginLeft: 10,
        marginBottom: 5,
        color: "#f4f4f4",
    },
    input: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 15,
    },
    buttonContainer: {
        width: "90%",
        marginVertical: 5,
    },
});

