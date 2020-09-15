import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FormModal, Button, ThemeProvider, bdcTheme, DataTable } from 'bdc-components';
import { ExitToApp as SignInIcon, AccountCircleOutlined as UserIcon } from '@material-ui/icons';

interface User {
	name: string;
	email: string;
	role: string | null;
}

const App = () => {
	const [ user, setUser ] = useState<User | undefined>();

	const newUser = {
		name: '',
		email: '',
		role: null
	};

	const Modal = () => (
		<FormModal
			name="Sign Up"
			fieldStructures={{
				name: { type: 'text' },
				email: { type: 'text' },
				role: { type: 'option', options: [ 'viewer', 'editor', 'admin', 'owner' ] }
			}}
			initialValues={user}
			onSubmit={values => {
				console.log(values);
				return new Promise(resolve => setTimeout(resolve, 2000));
			}}
			onClose={() => setUser(undefined)}
		/>
	);

	const Table = () => (
		<DataTable
			fieldMap={{
				email: { label: 'Email', columnTemplate: 2 },
				name: { label: 'Name', columnTemplate: 2 },
				role: { label: 'Role' }
			}}
			identifyingField="name"
			items={{ ben: { email: 'ben@baldwindesign.co', name: 'Ben', role: 'owner' } }}
			itemIcon={<UserIcon />}
			itemClickHandler={userData => setUser(userData)}
		/>
	);

	return (
		<ThemeProvider theme={bdcTheme}>
			<Button action={() => setUser(newUser)}>
				<SignInIcon />
			</Button>
			<Table />
			{user && <Modal />}
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
