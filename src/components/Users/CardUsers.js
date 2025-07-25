import { StyleSheet, Text, View } from "react-native";
import Buttons from "../Buttons";
 
const CardUser = ({ user, onEdit, onDelete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{user.nombre}</Text>
      <Text style={styles.cardText}>Edad: {user.edad}</Text>
      <Text style={styles.cardText}>Correo: {user.correo}</Text>
      
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Buttons text="Editar" action={() => onEdit(user)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Buttons text="Eliminar" action={() => onDelete(user.id)} />
        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5C3D2E",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: "#3B2C24",
    marginBottom: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});
 
export default CardUser;