import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Use fallback if provided, otherwise default UI
      return (
        this.props.fallback || (
          <div className="p-10 text-center">
            <h2 className="text-xl font-bold">Something went wrong.</h2>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
