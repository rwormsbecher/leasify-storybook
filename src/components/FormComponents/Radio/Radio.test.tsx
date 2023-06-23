import React from "react";
import { render, screen } from "@testing-library/react";
import { RadioComponent, ILeasifyRadioButton } from "./Radio";
import '@testing-library/jest-dom';


describe("RadioComponent", () => {
    const mockProps: ILeasifyRadioButton = {
      internalName: "radioButton",
      text: "Radio Button Text",
    };
  
    it("renders radio button with correct text", () => {
      // arrange
      render(<RadioComponent {...mockProps} />);
      const radioButton = screen.getByLabelText(/Radio Button Text/i);

      // assert
      expect(radioButton).toBeInTheDocument();
    });
  
    it("applies the provided internal name to the radio button", () => {
      // arrange 
      render(<RadioComponent {...mockProps} />);
      const radioButton = screen.getByLabelText(/Radio Button Text/i);

      // assert
      expect(radioButton).toHaveAttribute("name", "radioButton");
    });

})