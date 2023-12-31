import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('UseWorkoutsContext must be used insid an WorkoutContextProvider')
    }

    return context
}