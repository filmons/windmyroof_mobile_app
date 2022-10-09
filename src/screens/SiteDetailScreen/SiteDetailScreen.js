
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { getSites } from '../../service/site.service';

export default function SiteDetailScreen() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch("https://api.trackmyroof.com/api/users");
    console.log(resp, 'resprespresp')
    const data = await resp.json();
    console.log(data)
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Box px={5} py={2} rounded="md" bg="primary.300" my={2}>
        {item.title}
      </Box>
    );
  };

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Site Detail Screen </Text>
        <Center flex={1}>
      <Box> Fetch API</Box>
        {loading && <Box>Loading..</Box>}
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </Center>

      </View>
    );
  }