import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Buttons from "../components/Buttons";
 
const EditUser = ({ route, navigation }) => {
  const { user } = route.params;
  
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(false);

  // Cargar datos del usuario al inicializar
  useEffect(() => {
    if (user) {
      setNombre(user.nombre);
      setEdad(user.edad.toString());
      setCorreo(user.correo);
    }
  }, [user]);

  // Función para actualizar usuario
  const handleUpdateUser = async () => {
    if (!nombre || !edad || !correo) {
      Alert.alert("Error", "Por favor, completa todos los campos");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://retoolapi.dev/zZhXYF/movil/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          edad: parseInt(edad),
          correo,
        }),
      });

      if (response.ok) {
        Alert.alert("Éxito", "Usuario actualizado correctamente", [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]);
      } else {
        Alert.alert("Error", "No se pudo actualizar el usuario");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Ocurrió un error al actualizar los datos");
    } finally {
      setLoading(false);
    }
  };

  // Función para cancelar edición
  const handleCancel = () => {
    navigation.goBack();
  };
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Usuario</Text>
      <Text style={styles.subtitle}>
        Modifica la información del usuario
      </Text>
 
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="#A1866F"
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        placeholderTextColor="#A1866F"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        placeholderTextColor="#A1866F"
      />

      <View style={styles.buttonContainer}>
        <Buttons 
          text={loading ? "Actualizando..." : "Actualizar"} 
          action={handleUpdateUser}
        />
        
        <View style={styles.cancelButton}>
          <Buttons text="Cancelar" action={handleCancel} />
        </View>
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#EAD8C0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#5C3D2E",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#5C3D2E",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#5C3D2E",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#FFF",
    color: "#000",
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    marginTop: 10,
  },
});
 
export default EditUser;