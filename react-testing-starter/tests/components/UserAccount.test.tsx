import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import UserAccount from '../../src/components/UserAccount';
import { User } from '../../src/entities';

describe('UserAccount', () => {

    it('should render user name', () => {
        const user: User = { id: 1, name: 'Khalid' };

        render(<UserAccount user={user} />);

        expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    it('should render Edit button when user is admin', () => {

        const user: User = { id: 1, name: 'Khalid', isAdmin: true};

        render(<UserAccount user={user} />);

        //Assertion
        const button = screen.queryByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/edit/i);
    });

    // it('should not render Edit button if user is not admin', () => {
    //     const user: User = { id: 1, name: 'Khalid', isAdmin: false};
        
    //     render(<UserAccount user={user} />);
    //     screen.debug();

    //     //Assertion
    //     const button = screen.queryByRole('button');
    //     expect(button).not.toBeInTheDocument();
    // });
})
