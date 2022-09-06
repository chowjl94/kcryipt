import logo from '../images/logo.png'

const Footer = () =>{
    return(
<footer class="p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <div className='md:flex-[0.5] flex-intial justify-center items-center '>
                <img src={logo} alt='logo' className='w-32 cursor-pointer'></img>
            </div>
        </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <p href="#" class="mr-4 hover:underline md:mr-6 ">Market</p>
        </li>
        <li>
            <p href="#" class="mr-4 hover:underline md:mr-6">Exchange</p>
        </li>
        <li>
            <p href="#" class="hover:underline">Wallet</p>
        </li>

        <li>
            <p href="#" class="hover:underline">Contact</p>
        </li>
    </ul>
</footer>


    )
}

export default Footer