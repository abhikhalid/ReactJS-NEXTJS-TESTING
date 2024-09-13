import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greet from '../../src/components/Greet';
import '@testing-library/jest-dom/vitest';

describe('Greet', () => {
    it('should render Hello with the name when name is provided', () => {
        render(<Greet name="Khalid" />) //renders our component into virtual dom, JS DOM

        //screen.debug(); // to see the state of the DOM

        //to complete our test, we have to find this heading in the DOM and make an asserting against it

        //to do that, we have to use one of the query methods in react testing library.

        //ASSERTION
        const heading = screen.getByRole('heading');
        //GOOGLE => testing library jest dom
        expect(heading).toBeInTheDocument(); //@testing-library/jest-dom/vitest'
        expect(heading).toHaveTextContent(/khalid/i);
    });


     it('should render login button when name is not provided', () => {
        render(<Greet />) 

        //ASSERTION
        const button = screen.getByRole('button');
       
        expect(button).toBeInTheDocument(); 
        expect(button).toHaveTextContent(/login/i);
    })
})