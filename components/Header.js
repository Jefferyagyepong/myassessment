import Image from "next/image";
export default function Header() {
    return (
        <div>
            <header>
                <h1>IFMA</h1>
                <form>
                    
           <input type="search" id="site-search" name="q" />

           <button>Search</button>
                    </form>
        
            </header>
        </div>
        
    );
}

