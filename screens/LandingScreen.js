import React, { Component } from "react";
import { Alert, FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import { Divider } from "react-native-elements";
import colors from "../styles/colors";
import fontStyle from "../styles/fontStyle";
import Constants from "../styles/Constants";

import database from "@react-native-firebase/database";
let data = [
  {
    team1: {
      name: "IND",
      score: 117,
      wickets: 7,
      innings: {
        team1: [
          {
            playerName: "Madhevere",
            out: "c Neil Rock b Craig Young",
            run: "1",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "T Marumani",
            out: "c Stirling b Craig Young",
            run: "1",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Chakabva (wk)",
            out: "b Simi Singh",
            run: "47",
            ball: "28",
            four: "4",
            six: "1",
          },
          {
            playerName: "Dion Myers",
            out: "b Getkate",
            run: "10",
            ball: "14",
            four: "1",
            six: "0",
          },
          {
            playerName: "Craig Ervine (c)",
            out: "c Andy Balbirnie b Simi Singh",
            run: "17",
            ball: "12",
            four: "1",
            six: "1",
          },
          {
            playerName: "Milton Shumba",
            out: "c Neil Rock b Barry McCarthy",
            run: "7",
            ball: "18",
            four: "0",
            six: "0",
          },
          {
            playerName: "Ryan Burl",
            out: "run out (Andy Balbirnie)",
            run: "12",
            ball: "15",
            four: "0",
            six: "0",
          },
          {
            playerName: "W Masakadza",
            out: "not out",
            run: "19",
            ball: "15",
            four: "1",
            six: "0",
          },
          {
            playerName: "Luke Jongwe",
            out: "not out",
            run: "2",
            ball: "4",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Craig Young",
            over: "4",
            run: "15",
            wickets: "2",
          },
          {
            playerName: "Barry McCarthy",
            over: "4",
            run: "20",
            wickets: "1",
          },
          {
            playerName: "Curtis Campher",
            over: "2",
            run: "25",
            wickets: "1",
          },
          {
            playerName: "Simi Singh",
            over: "4",
            run: "22",
            wickets: "2",
          },
          {
            playerName: "Getkate",
            over: "2",
            run: "16",
            wickets: "1",
          },
          {
            playerName: "Benjamin White",
            over: "4",
            run: "18",
            wickets: "0",
          },
        ],
        extras: "1",
        total: "117",
        didNotBat: "Chatara, Ngarava,",
      },
      overs: "20",
    },
    team2: {
      name: "ENG",
      score: 114,
      wickets: 10,
      innings: {
        team2: [
          {
            playerName: "Paul Stirling",
            out: "b Luke Jongwe",
            run: "24",
            ball: "19",
            four: "5",
            six: "0",
          },
          {
            playerName: "Kevin O Brien",
            out: "b Ryan Burl",
            run: "25",
            ball: "32",
            four: "3",
            six: "0",
          },
          {
            playerName: "Andrew Balbirnie (c)",
            out: "lbw b Ryan Burl",
            run: "6",
            ball: "8",
            four: "0",
            six: "0",
          },
          {
            playerName: "George Dockrell",
            out: "c W Masakadza b Ryan Burl",
            run: "8",
            ball: "6",
            four: "1",
            six: "0",
          },
          {
            playerName: "Shane Getkate",
            out: "c Chatara b W Masakadza",
            run: "5",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Curtis Campher",
            out: "c Dion Myers b W Masakadza",
            run: "3",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "Neil Rock (wk)",
            out: "b Luke Jongwe",
            run: "4",
            ball: "7",
            four: "0",
            six: "0",
          },
          {
            playerName: "Simi Singh",
            out: "not out",
            run: "28",
            ball: "22",
            four: "3",
            six: "1",
          },
          {
            playerName: "Barry McCarthy",
            out: "b Ngarava",
            run: "4",
            ball: "11",
            four: "0",
            six: "0",
          },
          {
            playerName: "Craig Young",
            out: "run out (Chakabva/Ngarava)",
            run: "0",
            ball: "1",
            four: "0",
            six: "0",
          },
          {
            playerName: "Benjamin White",
            out: "not out",
            run: "0",
            ball: "0",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Wellington Masakadza",
            over: "4",
            run: "18",
            wickets: "2",
          }, {
            playerName: "Richard Ngarava",
            over: "4",
            run: "17",
            wickets: "1",
          }, {
            playerName: "Tendai Chatara",
            over: "3",
            run: "25",
            wickets: "0",
          }, {
            playerName: "Luke Jongwe",
            over: "4",
            run: "17",
            wickets: "2",
          }, {
            playerName: "Ryan Burl",
            over: "4",
            run: "22",
            wickets: "3",
          }, {
            playerName: "Dion Myers",
            over: "1",
            run: "12",
            wickets: "0",
          },
        ],
        extras: "7",
        total: "114",
        didNotBat: "",
      },
      overs: "20",
    },
    result: {
      date: "Fri,27 Aug 2021",
      winTeam: "IND win by 3 runs",
    },
  },
  {
    team1: {
      name: "IND1",
      score: 117,
      wickets: 7,
      innings: {
        team1: [
          {
            playerName: "Madhevere",
            out: "c Neil Rock b Craig Young",
            run: "1",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "T Marumani",
            out: "c Stirling b Craig Young",
            run: "1",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Chakabva (wk)",
            out: "b Simi Singh",
            run: "47",
            ball: "28",
            four: "4",
            six: "1",
          },
          {
            playerName: "Dion Myers",
            out: "b Getkate",
            run: "10",
            ball: "14",
            four: "1",
            six: "0",
          },
          {
            playerName: "Craig Ervine (c)",
            out: "c Andy Balbirnie b Simi Singh",
            run: "17",
            ball: "12",
            four: "1",
            six: "1",
          },
          {
            playerName: "Milton Shumba",
            out: "c Neil Rock b Barry McCarthy",
            run: "7",
            ball: "18",
            four: "0",
            six: "0",
          },
          {
            playerName: "Ryan Burl",
            out: "run out (Andy Balbirnie)",
            run: "12",
            ball: "15",
            four: "0",
            six: "0",
          },
          {
            playerName: "W Masakadza",
            out: "not out",
            run: "19",
            ball: "15",
            four: "1",
            six: "0",
          },
          {
            playerName: "Luke Jongwe",
            out: "not out",
            run: "2",
            ball: "4",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Craig Young",
            over: "4",
            run: "15",
            wickets: "2",
          },
          {
            playerName: "Barry McCarthy",
            over: "4",
            run: "20",
            wickets: "1",
          },
          {
            playerName: "Curtis Campher",
            over: "2",
            run: "25",
            wickets: "1",
          },
          {
            playerName: "Simi Singh",
            over: "4",
            run: "22",
            wickets: "2",
          },
          {
            playerName: "Getkate",
            over: "2",
            run: "16",
            wickets: "1",
          },
          {
            playerName: "Benjamin White",
            over: "4",
            run: "18",
            wickets: "0",
          },
        ],
        extras: "1",
        total: "117",
        didNotBat: "Chatara, Ngarava,",
      },
      overs: "20",
    },
    team2: {
      name: "ENG1",
      score: 114,
      wickets: 10,
      innings: {
        team2: [
          {
            playerName: "Paul Stirling",
            out: "b Luke Jongwe",
            run: "24",
            ball: "19",
            four: "5",
            six: "0",
          },
          {
            playerName: "Kevin O Brien",
            out: "b Ryan Burl",
            run: "25",
            ball: "32",
            four: "3",
            six: "0",
          },
          {
            playerName: "Andrew Balbirnie (c)",
            out: "lbw b Ryan Burl",
            run: "6",
            ball: "8",
            four: "0",
            six: "0",
          },
          {
            playerName: "George Dockrell",
            out: "c W Masakadza b Ryan Burl",
            run: "8",
            ball: "6",
            four: "1",
            six: "0",
          },
          {
            playerName: "Shane Getkate",
            out: "c Chatara b W Masakadza",
            run: "5",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Curtis Campher",
            out: "c Dion Myers b W Masakadza",
            run: "3",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "Neil Rock (wk)",
            out: "b Luke Jongwe",
            run: "4",
            ball: "7",
            four: "0",
            six: "0",
          },
          {
            playerName: "Simi Singh",
            out: "not out",
            run: "28",
            ball: "22",
            four: "3",
            six: "1",
          },
          {
            playerName: "Barry McCarthy",
            out: "b Ngarava",
            run: "4",
            ball: "11",
            four: "0",
            six: "0",
          },
          {
            playerName: "Craig Young",
            out: "run out (Chakabva/Ngarava)",
            run: "0",
            ball: "1",
            four: "0",
            six: "0",
          },
          {
            playerName: "Benjamin White",
            out: "not out",
            run: "0",
            ball: "0",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Wellington Masakadza",
            over: "4",
            run: "18",
            wickets: "2",
          }, {
            playerName: "Richard Ngarava",
            over: "4",
            run: "17",
            wickets: "1",
          }, {
            playerName: "Tendai Chatara",
            over: "3",
            run: "25",
            wickets: "0",
          }, {
            playerName: "Luke Jongwe",
            over: "4",
            run: "17",
            wickets: "2",
          }, {
            playerName: "Ryan Burl",
            over: "4",
            run: "22",
            wickets: "3",
          }, {
            playerName: "Dion Myers",
            over: "1",
            run: "12",
            wickets: "0",
          },
        ],
        extras: "7",
        total: "114",
        didNotBat: "",
      },
      overs: "20",
    },
    result: {
      date: "Sat,28 Aug 2021",
      winTeam: "IND win by 3 runs",
    },
  },
  {
    team1: {
      name: "IND3",
      score: 117,
      wickets: 7,
      innings: {
        team1: [
          {
            playerName: "Madhevere",
            out: "c Neil Rock b Craig Young",
            run: "1",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "T Marumani",
            out: "c Stirling b Craig Young",
            run: "1",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Chakabva (wk)",
            out: "b Simi Singh",
            run: "47",
            ball: "28",
            four: "4",
            six: "1",
          },
          {
            playerName: "Dion Myers",
            out: "b Getkate",
            run: "10",
            ball: "14",
            four: "1",
            six: "0",
          },
          {
            playerName: "Craig Ervine (c)",
            out: "c Andy Balbirnie b Simi Singh",
            run: "17",
            ball: "12",
            four: "1",
            six: "1",
          },
          {
            playerName: "Milton Shumba",
            out: "c Neil Rock b Barry McCarthy",
            run: "7",
            ball: "18",
            four: "0",
            six: "0",
          },
          {
            playerName: "Ryan Burl",
            out: "run out (Andy Balbirnie)",
            run: "12",
            ball: "15",
            four: "0",
            six: "0",
          },
          {
            playerName: "W Masakadza",
            out: "not out",
            run: "19",
            ball: "15",
            four: "1",
            six: "0",
          },
          {
            playerName: "Luke Jongwe",
            out: "not out",
            run: "2",
            ball: "4",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Craig Young",
            over: "4",
            run: "15",
            wickets: "2",
          },
          {
            playerName: "Barry McCarthy",
            over: "4",
            run: "20",
            wickets: "1",
          },
          {
            playerName: "Curtis Campher",
            over: "2",
            run: "25",
            wickets: "1",
          },
          {
            playerName: "Simi Singh",
            over: "4",
            run: "22",
            wickets: "2",
          },
          {
            playerName: "Getkate",
            over: "2",
            run: "16",
            wickets: "1",
          },
          {
            playerName: "Benjamin White",
            over: "4",
            run: "18",
            wickets: "0",
          },
        ],
        extras: "1",
        total: "117",
        didNotBat: "Chatara, Ngarava,",
      },
      overs: "20",
    },
    team2: {
      name: "ENG3",
      score: 114,
      wickets: 10,
      innings: {
        team2: [
          {
            playerName: "Paul Stirling",
            out: "b Luke Jongwe",
            run: "24",
            ball: "19",
            four: "5",
            six: "0",
          },
          {
            playerName: "Kevin O Brien",
            out: "b Ryan Burl",
            run: "25",
            ball: "32",
            four: "3",
            six: "0",
          },
          {
            playerName: "Andrew Balbirnie (c)",
            out: "lbw b Ryan Burl",
            run: "6",
            ball: "8",
            four: "0",
            six: "0",
          },
          {
            playerName: "George Dockrell",
            out: "c W Masakadza b Ryan Burl",
            run: "8",
            ball: "6",
            four: "1",
            six: "0",
          },
          {
            playerName: "Shane Getkate",
            out: "c Chatara b W Masakadza",
            run: "5",
            ball: "10",
            four: "0",
            six: "0",
          },
          {
            playerName: "Curtis Campher",
            out: "c Dion Myers b W Masakadza",
            run: "3",
            ball: "4",
            four: "0",
            six: "0",
          },
          {
            playerName: "Neil Rock (wk)",
            out: "b Luke Jongwe",
            run: "4",
            ball: "7",
            four: "0",
            six: "0",
          },
          {
            playerName: "Simi Singh",
            out: "not out",
            run: "28",
            ball: "22",
            four: "3",
            six: "1",
          },
          {
            playerName: "Barry McCarthy",
            out: "b Ngarava",
            run: "4",
            ball: "11",
            four: "0",
            six: "0",
          },
          {
            playerName: "Craig Young",
            out: "run out (Chakabva/Ngarava)",
            run: "0",
            ball: "1",
            four: "0",
            six: "0",
          },
          {
            playerName: "Benjamin White",
            out: "not out",
            run: "0",
            ball: "0",
            four: "0",
            six: "0",
          },
        ],
        bowlers: [
          {
            playerName: "Wellington Masakadza",
            over: "4",
            run: "18",
            wickets: "2",
          }, {
            playerName: "Richard Ngarava",
            over: "4",
            run: "17",
            wickets: "1",
          }, {
            playerName: "Tendai Chatara",
            over: "3",
            run: "25",
            wickets: "0",
          }, {
            playerName: "Luke Jongwe",
            over: "4",
            run: "17",
            wickets: "2",
          }, {
            playerName: "Ryan Burl",
            over: "4",
            run: "22",
            wickets: "3",
          }, {
            playerName: "Dion Myers",
            over: "1",
            run: "12",
            wickets: "0",
          },
        ],
        extras: "7",
        total: "114",
        didNotBat: "",
      },
      overs: "20",
    },
    result: {
      date: "Sun,29 Aug 2021",
      winTeam: "IND win by 3 runs",
    },
  },
];

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this._setNavigationOptions();
  }

  /**
   * set navigation options
   */
  _setNavigationOptions = () => {
    this.props.navigation.setOptions({
      headerTitle: props => <Text
        {...props}
        style={{
          alignSelf: "center",
          fontFamily: fontStyle.MontserratBold,
          fontSize: 16,
          color: colors.WHITE,
        }}>{Constants.APP_TITLE}</Text>,
      headerStyle: {
        backgroundColor: colors.PRIMARY_COLOR,
      },
      headerBackButtonText: "",
      headerBackTitleVisible: false,
      headerTintColor: colors.BLACK_0B,
      headerRight: () => (
        <View />
      ),
      headerLeft: () => (
        <Image
          resizeMode={"cover"}
          style={{
            width: 30, height: 20,
            marginStart: 15,
          }}
          source={require("../assets/images/ic_top_logo.png")} />
      ),
    });
  };

  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: colors.PRIMARY_COLOR,
      }}>
        <SafeAreaView />
        <StatusBar translucent backgroundColor="tansparent" />
        <View style={{
          height: 50,
          marginTop: 22,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.PRIMARY_COLOR,
          flexDirection: "row",
        }}>
          <Image
            resizeMode={"cover"}
            style={{
              width: 30, height: 30,
              position: "absolute",
              left: 0,
              alignSelf: "center",
              marginStart: 15,
            }} source={require("../assets/images/ic_top_logo.png")} />

          <Text
            style={{
              fontFamily: fontStyle.MontserratBold,
              fontSize: 20,
              color: colors.WHITE,
            }}>{Constants.APP_TITLE}</Text>

          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              marginEnd: 15,
            }}
            onPress={async () => {
              let path = "liveMatchList";
              const scores = await database()
                .ref(path)
                .orderByValue()
                .once("value")
                .then((result) => {
                  let liveList = Object.keys(result).map(function(k) {
                    return result[k];
                  });

                  if (liveList !== undefined && liveList !== null && liveList[0].childrenCount > 0) {
                    let dataString = JSON.stringify(liveList[0].value);
                    dataString
                      .replace("-", "&&&")
                      .replace("_", "&&&");

                    this.props.navigation.navigate("LiveTeamListScreen", {
                      childKeys: liveList[0].childKeys,
                      value: JSON.parse(dataString),
                    });
                  } else {
                    Alert.alert("No Match live")
                    // this.props.navigation.navigate("StartMatchScreen1");
                  }
                });
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}>
              <Image
                resizeMode={"contain"}
                style={{
                  width: 5,
                  height: 5,
                  alignSelf: "center",
                  marginEnd: 3,
                }} source={require("../assets/images/ellipse.png")} />
              <Image
                resizeMode={"contain"}
                style={{
                  width: 40,
                  height: 20,
                  alignSelf: "center",
                }} source={require("../assets/images/live.png")} />
            </View>

          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 10,
            backgroundColor: colors.WHITE,
          }}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("MatchDetailsScreen", {
                name: item.team1.name + " VS  " + item.team2.name,
                item: item,
              });
            }}>
              <View style={{
                flexDirection: "column",
                paddingBottom: 10,
                paddingLeft: 18,
                paddingRight: 18,
                marginStart: 20,
                marginEnd: 20,
                borderRadius: 8,
                marginBottom: 10,
                borderWidth: 1.5,
                borderColor: "rgba(2,79,39,0.1)",
              }}>
                <Text
                  style={{
                    marginTop: 15,
                    alignSelf: "center",
                    fontFamily: fontStyle.MontserratBold,
                    fontSize: 14,
                    color: colors.STATUS_BAR_COLOR,
                  }}>{
                  item.result.winTeam
                }</Text>
                <Text
                  style={{
                    alignSelf: "center",
                    fontFamily: fontStyle.MontserratMedium,
                    fontSize: 12,
                    color: colors.BLACK,
                  }}>{
                  item.result.date
                }</Text>

                <View style={{
                  flexDirection: "row",
                }}>

                  <View style={{
                    flexDirection: "column",
                  }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratMedium,
                        fontSize: 14,
                        color: colors.BLACK,
                      }}>{
                      item.team1.name
                    }</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratBold,
                        fontSize: 14,
                        color: colors.BLACK,
                      }}>{
                      item.team1.score + "/" + item.team1.wickets
                    }</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratRegular,
                        fontSize: 12,
                        color: colors.BLACK,
                      }}>{
                      item.team1.overs + " Ov"
                    }</Text>
                  </View>


                  <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <View style={{
                      flexDirection: "column",
                      width: 40,
                      borderRadius: 50,
                      height: 40,
                      alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: colors.YELLOW_COLOR,
                    }}>
                      <Text
                        style={{
                          alignSelf: "center",
                          textAlign: "center",
                          fontFamily: fontStyle.MontserratBold,
                          fontSize: 15,
                          color: colors.STATUS_BAR_COLOR,
                        }}>{
                        "VS"
                      }</Text>
                    </View>
                  </View>
                  <View style={{
                    flexDirection: "column",
                  }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratBold,
                        fontSize: 14,
                        color: colors.BLUE_COLOR,
                      }}>{
                      item.team2.name
                    }</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratMedium,
                        fontSize: 14,
                        color: colors.BLACK_0B,
                      }}>{
                      item.team2.score + "/" + item.team2.wickets
                    }</Text>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontFamily: fontStyle.MontserratRegular,
                        fontSize: 12,
                        color: colors.BLACK_0B,
                      }}>{
                      item.team2.overs + " Ov"
                    }</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          )} />
      </View>
    );
  }
}

export default LandingScreen;