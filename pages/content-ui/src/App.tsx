import { useEffect } from 'react';
import { useStorage } from '@extension/shared';
import { drawerStorage } from '@extension/storage';
import { parserHTML } from './utils/parser';

export default function App() {
  const theme = useStorage(drawerStorage);

  useEffect(() => {
    console.log('content ui loaded');
  parserHTML()

  }, []);


  return (
    <div id="__seo-ck">
      123
      {/* {theme} */}
      {/* <div className="flex gap-1 text-blue-500">
        Edit <strong className="text-blue-700">pages/content-ui/src/app.tsx</strong> and save to reload.
      </div>
      <Button theme={theme} onClick={exampleThemeStorage.toggle}>
        Toggle Theme
      </Button> */}
      {/* <button className="btn">Button</button> */}

      {/* <button></button> */}
    </div>
  );
}
