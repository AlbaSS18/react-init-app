import * as React from "react";

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    // Para cambiar el estado automáticamente
    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        // Mantar un error al centry o cosas así
        console.log("Error")
    }

    render() {
        if(this.state.hasError) return <p>Ooppps! Something went wrong</p>
        return this.props.children;
    }
}

export default ErrorBoundary;
