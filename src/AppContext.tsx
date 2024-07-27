import { createContext, useState } from "react";

interface IAppContext {
	message: string
}

interface IAppProvider {
	children: React.ReactNode;
}

const githubAccessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const githubInfos = {
	baseURL: "https://api.github.com/graphql",
	username: "edwardtanguay",
	headers: {
		"Content-Type": "applciation/json",
		Authorization: `bearer ${githubAccessToken}`
	}
}

console.log(githubInfos);

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [message] = useState("Welcome to the Info Site.");

	return (
		<AppContext.Provider
			value={{
				message
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
