## <Checkbox>
como é:

```html
<Checkbox variantColor="red" defaultIsChecked>
  conteúdo do checkbox qe o ativa/desativa
</Checkbox>
```

como deveria ser:

```html
<CheckboxItem variantColor="red" defaultIsChecked>
  <Checkbox defaultIsChecked icon="" style={{ backgroundColor: "green" }} />
  conteúdo do checkbox qe o ativa/desativa
</CheckboxItem>
```

## <Radio>
como é:

```html
<Radio variantColor="red" defaultIsChecked>
  conteúdo do checkbox qe o ativa/desativa
</Radio>
```

como deveria ser:

```html
<RadioItem variantColor="red" defaultIsChecked>
  <Radio defaultIsChecked icon="" style={{ backgroundColor: "green" }} />
  conteúdo do checkbox qe o ativa/desativa
</RadioItem>
```

## <Tabs>
como é:

```html
<Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
```

como deveria ser:

```html
<Tabs>
  <TabItem>
    <Tab>One</Tab>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
  </TabItem>

  <TabItem>
    <Tab>Two</Tab>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabItem>

  <TabItem>
    <Tab>Three</Tab>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabItem>
</Tabs>
```
