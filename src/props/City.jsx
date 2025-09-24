import { Avatar } from './Avatar';

export default function City() {
    return (
        <>
            <Avatar 
                alias= 
                {{
                    url: 'https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    city: "Tokyo",
                    nation: "Japan" 
                }}>
                {/* Children in Avatar parameter */}
                capital of
            </Avatar>
            <Avatar 
                alias= 
                {{
                    url: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    city: "London",
                    nation: "England"
                }}>
                {/* Children in Avatar parameter */}
                capital of
            </Avatar>
        </>
    )
}