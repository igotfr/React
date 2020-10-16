<Checkbox
  attr={{ checked: true }}
  sx={{ }}
>
  <CheckboxChecked sx={{ }}>
    {content}
  </CheckboxChecked>

  <CheckboxUnChecked sx={{ }}>
    {context}
  </CheckboxUnChecked>

  {content}
</Checkbox>

-----------------------------------------------

<CheckboxGroup
  attr={{
    defaultCheckeds: ["naruto", "kakashi"],
    defaultUnCheckeds: [],
    limitCheckeds: 3,
    limitUnckeds: 2
  }}
  sx={{ }}
>
  <Checkbox attr={{ value: "naruto" }}>...</Checkbox>
  <Checkbox attr={{ value: "sasuke" }}>...</Checkbox>
  <Checkbox attr={{ value: "kakashi" }}>...</Checkbox>
</CheckboxGroup>

###############################################

<Radio>
  <RadioChecked sx={{ }}>
    {content}
  </RadioChecked>

  <RadioUnChecked sx={{ }}>
    {context}
  </RadioUnChecked>

  {content}
</Radio>

-----------------------------------------------

<RadioGroup
  attr={{
    defaultChecked: "kakashi"
  }}
  sx={{ }}
>
  <Radio attr={{ value: "naruto" }}>...</Radio>
  <Radio attr={{ value: "sasuke" }}>...</Radio>
  <Radio attr={{ value: "kakashi" }}>...</Radio>
</RadioGroup>
