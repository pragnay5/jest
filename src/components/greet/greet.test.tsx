import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test('greet renders corrcctly', () => {
    render(<Greet />)
    const textelement = screen.getByText('Hello')
    expect(textelement).toBeInTheDocument()
})


test('greet renderes name', () => {
    render(<Greet name ='Pragna' />)
    const textelement = screen.getByText("Henpm esllo Pragna")
    expect(textelement).toBeInTheDocument()
})