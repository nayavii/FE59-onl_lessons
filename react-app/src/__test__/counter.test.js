import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Counter } from "../components/counter";

describe("Counter test", () => {
  it("simple test", () => {
    const { getByText } = render(<Counter />);
    const counter = getByText("Результат: 0");
    const increment = getByText("Увеличить");
    const decrement = getByText("Уменьшить");

    expect(counter).toBeInTheDocument();
    expect(increment).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();

    fireEvent.click(increment);
    expect(counter).toHaveTextContent("Результат: 1");

    fireEvent.click(increment);
    expect(counter).toHaveTextContent("Результат: 2");

    fireEvent.click(increment);
    expect(counter).toHaveTextContent("Результат: 3");

    fireEvent.click(decrement);
    expect(counter).toHaveTextContent("Результат: 2");

    fireEvent.click(decrement);
    expect(counter).toHaveTextContent("Результат: 1");

    fireEvent.click(decrement);
    expect(counter).toHaveTextContent("Результат: 0");

    fireEvent.click(decrement);
    expect(counter).toHaveTextContent("Результат: -1");
  });
});
