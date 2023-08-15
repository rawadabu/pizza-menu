import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./index";

describe("Menu Component", () => {
  const mockPizzas = [
    {
      name: "Pizza Margherita",
      ingredient: "Tomato and mozarella",
      photoName: "pizzas/margherita.jpg",
      price: 10,
    },
    {
      name: "Pizza Funghi",
      ingredient: "Tomato, mushrooms",
      photoName: "pizzas/funghi.jpg",
      price: 12,
    },
  ];

  test("renders the correct number of pizzas", () => {
    render(<Menu />);
    const pizzaElements = screen.getAllByTestId("pizza");
    expect(pizzaElements.length).toBe(mockPizzas.length);
  });

  test("renders pizzas with correct props", () => {
    render(<Menu />);
    const pizzaElements = screen.getAllByTestId("pizza");

    for (let i = 0; i < pizzaElements.length; i++) {
      const nameElement = screen.getByText(mockPizzas[i].name);
      const ingredientElement = screen.getByText(mockPizzas[i].ingredient);
      const priceElement = screen.getByText(mockPizzas[i].price.toString());

      expect(nameElement).toBeInTheDocument();
      expect(ingredientElement).toBeInTheDocument();
      expect(priceElement).toBeInTheDocument();

      const imageElement = screen.getByAltText(mockPizzas[i].name);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement.getAttribute("src")).toBe(mockPizzas[i].photoName);
    }
  });
});
