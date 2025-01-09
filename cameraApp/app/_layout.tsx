import { Stack } from "expo-router/stack"

export default function layout() {
    return (
        <Stack>
            <Stack.screen name="(tabs)" options={{headerShown: false}} />
        </Stack>
    )
}