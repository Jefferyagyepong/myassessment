import Image from "next/image";
export default function Header() {
    return (
        <div>
            <header>
                <h1>IFMA</h1>
                <form>
                    <label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q" />

<button>Search</button>
                    <form/>
        
            </header>
        </div>
        
    );
}

