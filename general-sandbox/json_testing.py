import json

test_json = {
    "bla": "this"
}

print("Prior", type(test_json))

test_json = json.dumps(test_json)
print("Post", type(test_json))
