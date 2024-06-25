

import React from 'react'
import { AuthNavigation } from "./stacks";
import { AppNavigation } from './AppNavigation';
import { useAuth } from "../modules/Auth/hooks";
import { TabBarProvider } from './TabBarProvider';


export default function HandlerNavigation() {

    const { user } = useAuth();

    return user ? <TabBarProvider><AppNavigation /></TabBarProvider> : <AuthNavigation />;
}