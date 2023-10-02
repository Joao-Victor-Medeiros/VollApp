import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from "./Main";
import Appointment from "./Appointment";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Explore from "./Explore";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#002851',
    },
    tabBarActiveTintColor: '#339cff',
        tabBarInactiveTintColor: '#ffffff',
}

const tabs = [
    {
        name: 'Home',
        component: Main,
        icon: 'home'
    },
    {
        name: 'Appointment',
        component: Appointment,
        icon: 'calendar'
    },
    {
        name: 'Explore',
        component: Explore,
        icon: 'search'
    },
    {
        name: 'Profile',
        component: Profile,
        icon: 'person'
    }
]

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {
                tabs.map((tab) => (
                    <Tab.Screen key={tab.name} name={tab.name} component={tab.component} options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size}) => (
                            <Ionicons name={tab.icon} size={size} color={color} />
                        )
                    }}/>
                    )
                )
            }
        </Tab.Navigator>
    );
}