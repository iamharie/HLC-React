# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### useEffect()

- To handle any side effects in recat application
- componentDidMount(): Initial render cycle, dependencies acn be either empty or state or prop.
- componentDidUpdate(): Future render cycle, when dependency changes and that triggred to re-execute.
- componentWillUnmount: Cleaner function.

### memo()

- Wrapping the whole component using memo() hook to prevent re-rendere if the state or prop didn't change.
- memo checks the {pops, state} every time based on this factor and only if they are changed then it re-renders the component/ function.

### useCallback()

### useMemo()

- Wrapper for functions inside the component.

### HTTP Request

- data state
- loading state
- error state

### Tailwind CSS incorporated

- isFetching "Spinner Animation"

### Custom Hook
- Always start with "use" example useHari();
- We can obsoletely use hooks inside the custom hooks.
- Important: return the built-in hooks used inside a custom hook to have them destructured and used in other components.
- Optional: Custom-Hook can be stored in a seperate folder under the src of the project structure to have a clean project tree.

### Form
#### Handling Input:
-  useState(): on evey key stroke
-  useRef(): connect the hook to the HTML element's attribute; DOM directly manipulated while resetting the form
-  DataForm: in-built browser method to handle the form, const fd = new FormData(e.target);

#### Form Validation
- Every keystroke
- onBlur: Validated on focus
- In-built validation attributes
- In-built validation attributes + External validation

### Resuable Input Component
- Receive the required attributes via props and re-use the Input component inside a form to reduce dupilicate JSX.

### Custom Hook: Form validation
- TBD: Not a priority, as Formik || React Forms in most of the cases.
