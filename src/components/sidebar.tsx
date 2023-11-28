
import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Sidebar = component$(() => {
    const menu = useSignal(false)

    return( 
    <>
        <div class={`top-0 right-0 fixed h-full w-64
            ${menu.value ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
            <aside>
            <nav>
                <ul class="menu menu-lg bg-base-200 w-64 mt-20">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about/">About Us</Link></li>
                <li><Link href="/why-set-up-a-training/">Why Set Up a Training</Link></li>
                <li><Link href="/what-will-we-learn/">What Will We Learn</Link></li>
                <li><Link href="/testimonials/">Testimonials</Link></li>
                <li><Link href="/studies/">Studies</Link></li>
                <li><Link href="/cost/">Cost</Link></li>
                <li><Link href="/gallery/">Gallery</Link></li>
                <li><Link href="/contact-us/">Contact Us</Link></li>
                </ul>
            </nav>
            </aside>
        </div>
        { !menu.value ?
            <button onClick$={() => menu.value = !menu.value}>
                <svg class="right-6 top-4 w-12 h-12 fixed items-center cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            :
            <button class="z-10" onClick$={() => menu.value = !menu.value}>
                <svg class="text-xl fixed right-6 top-4 w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        }
    </>
  )});


