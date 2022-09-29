import {render, screen, cleanup} from '@testing-library/react'
import Admin from '../admin'

test('Should render to component', () =>{
    //expect(true).toBe(true);
    render(<Admin/>);
    const AdminDashboard = screen.getByTestId('Admin-Test-01');
    expect(AdminDashboard).toBeInTheDocument();
})