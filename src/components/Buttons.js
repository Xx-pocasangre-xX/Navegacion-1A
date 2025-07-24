import { Text, TouchableOpacity, StyleSheet  } from "react-native";

const Button = ({ text, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.boton}> 
        <Text style={styles.texto}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boton: {
    padding: 10,
    backgroundColor: "#074d68ff",
    borderRadius: 5
    },
    texto: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
    }
});

export default Button;