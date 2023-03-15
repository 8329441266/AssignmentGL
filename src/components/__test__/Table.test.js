import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from "../Table";

describe("Test the Table Component", () => {
  test("render the Table component in the document", async () => {
    const component=render(<Table />);
    const childElement=component.getByPlaceholderText("Enter Here");
    expect(childElement).toBeInTheDocument();
  });
});

test("render the table component with 2 button",async ()=>{
    render(<Table />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
});


test("displays text input and disabled button by default", () => {
    render(<Table />);
    const userInput = screen.getByTestId("input-field");
    const saveButton = screen.getByRole("button", { name: /save/i });    
    expect(userInput).toBeInTheDocument();
    expect(userInput).toHaveAttribute("type", "text");
    expect(saveButton).toBeDisabled();
    expect(saveButton).toHaveTextContent("save");
 });   
 
 
 test("user should be able to type in the input field", async () => {});
test("button should be enabled with input value", async () =>{});


// test("user should be able to type in the input field", async () => {
//     const onInputChange = jest.fn(); 
//     render(<Table onInputChange={onInputChange} />);
//     const userInput = screen.getByTestId("input-field");        
//     await userEvent.type(userInput, "ABC");
//     expect(onInputChange).toHaveBeenCalled();
//     expect(userInput.value).toBe("ABC");
// })


// test("displays list after add button click", () => {
//     render(<Table />);
//     const userInput = screen.getByTestId("input-field");
//     const saveButton = screen.getByRole("button", {name: /save/i });
  
//     fireEvent.change(userInput, { target: { value: "ABC" } });
//     expect(userInput.value).toBe("ABC");
//     expect(addButton.disabled).toBeFalsy();    
//     fireEvent.click(saveButton);
//     expect(listView).toHaveTextContent("ABC");
// });