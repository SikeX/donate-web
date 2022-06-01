function FootItem({ title }) {
  return (
    <span className="my-auto px-4 cursor-pointer hover:underline">{title}</span>
  )
}

function Footer() {
  return (
    <div className="flex flex-col w-full bg-blue-800 divide-y-2 divide-blue-900 text-white text-sm">
      <div className="flex divide-x-2 divide-blue-900 justify-center py-8">
        <FootItem title="联系我们" />
        <FootItem title="常见问题" />
        <FootItem title="捐赠查询" />
      </div>
      <div className="py-8 mx-auto">
        版权所有©哈尔滨工程大学校友会
      </div>
    </div>
  )
}

export default Footer
