export function getToken (): string | null {
	return localStorage.getItem('token')
}

export function setToken (token: string): void {
	localStorage.setItem('token', token)
}

export function removeItem (tokenName: string): void {
	localStorage.removeItem(tokenName)
}