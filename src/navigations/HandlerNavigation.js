

import React from 'react'
import { AuthNavigation } from "./stacks";
import { AppNavigation } from './AppNavigation';
import { useAuth } from "../modules/Auth/hooks";
import { LocationProvider } from '../contexts';


export default function HandlerNavigation() {

    const { user } = useAuth();

    return user && user.active ? <LocationProvider><AppNavigation /></LocationProvider> : <AuthNavigation />;
}