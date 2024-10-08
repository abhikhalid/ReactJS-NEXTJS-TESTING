import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import TermsAndConditions from '../../src/components/TermsAndConditions';
import userEvent from '@testing-library/user-event';


describe('TermsAndConditions', () => {
    it('should render with correct text and initial state', () => {
        render(<TermsAndConditions />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Terms & Conditions');

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // screen.getByRole('button', { name: /submit/i });
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        // expect(button).toHaveTextContent(/submit/i);
        expect(button).toBeDisabled();
    });

    it('should enable the button when then checkbox is checked', async () => {
        //Arrange
        render(<TermsAndConditions />);
        
        //Act
        const checkbox = screen.getByRole('checkbox');
        const user = userEvent.setup();
        await user.click(checkbox);

        //Assert
        expect(screen.getByRole('button')).toBeEnabled();
    });
})