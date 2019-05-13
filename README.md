This package is currently unsupported (in some way), but I'll try to make up some documentation. If something is wrong, please let me know. If everything will be all right, then I'll copy it to the README.

#Description
This field uses (and stores in db) as a [RRule](https://github.com/aramk/rrule/). Basically, if you want to start using it, go with RRule.fromString(string) (where string is the output from this field) and then use it as described [here](https://github.com/aramk/rrule/#occurrence-retrieval-methods).

#Usage
In your schema:

```javascript
new SimpleSchema({
    // ...
    schedule: {
        type: String,
        autoform: {
            type: 'universe-scheduler'
        }
    }
    // ...
});
```
Or directly in your template:

```javascript
{{!-- ... --}}
{{> afQuickField name="schedule" type="universe-scheduler"}}
{{!-- ... --}}
```

Few screenshots (not all available options):

#1
![Screenshot 1](screenshots/screenshot1.png)

#2
![Screenshot 2](screenshots/screenshot2.png)

#3
![Screenshot 3](screenshots/screenshot3.png)
