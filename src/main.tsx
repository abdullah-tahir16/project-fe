import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import {queryClient} from "./infrastructure/utils/queryClient/queryClient.ts";
import {ToastContainer} from "react-toastify";
import './index.css';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" autoClose={3000} />
            <App/>
        </QueryClientProvider>
    </StrictMode>
)
