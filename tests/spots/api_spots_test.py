import json

def test_get_user_reservations(client):
    response = client.get('/api/reservations/1')
    res = json.loads(response.data)
    print(res, "heheheheheheheheheheheheheh")