## Rifaaq Landing Page

### Technologies

- Next.js
- Tailwind CSS
- Twin.macro
- Typescript

### Notes

```js
import HomeLayoutProvider from '@/components/HomeLayoutWrapper' //works for client-side declared wrapper
import { HomeLayoutProvider } from '@/components' // throws the context not available on server error
```
