import React from "react";
import { Text, ScrollView, Image, StyleSheet, Button } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <ScrollView
      style={estilos.scrollView}
      contentContainerStyle={estilos.container}
    >
      <Text style={estilos.titulo}>Olá! Bem-vindo ao app MOBILE II :)</Text>

      <Image
        style={estilos.imagem}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />

      <Text style={estilos.texto}>
        Aqui você pode navegar por conteúdos simples com textos e imagens, tudo feito para o MOBILE II.
      </Text>

      <Text style={estilos.texto}>
        Clique no botão abaixo para ir para a próxima página do MOBILE II.
      </Text>

      <Button
        title="Ir para a página Sobre"
        onPress={() => navigation.navigate("Info")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  scrollView: {
    backgroundColor: "#f0f0f5",
  },
  container: {
    padding: 25,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
    color: "#333",
  },
  imagem: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
    marginBottom: 14,
    lineHeight: 24,
    color: "#555",
    textAlign: "center",
  },
});
