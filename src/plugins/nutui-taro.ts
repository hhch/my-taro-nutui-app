import { Button, Icon, Input, Toast } from '@nutui/nutui-taro'

const Components = [Button, Toast, Input, Icon]

const useNutUI = (app: any) => {
  Components.forEach(item => {
    app.use(item)
  })
}
export default useNutUI
