import React, { Component } from "react";
import {
  Alert,
  FlatList,
  Image, ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
];

class LiveMatchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matchId: this.props.route.params.matchId,
      item: this.props.route.params.item,
      bowlerData: null,
      batsman1: null,
      batsman2: null,
      batsman1Runs: 0,
      batsman1Bowls: 0,
      batsman2Runs: 0,
      batsman2Bowls: 0,
      runs: 0,
      extra: 0,
      wickets: 0,
      totalOvers: 20,
      overs: 0,
      currentOverBowl: 0,
      currentOverBowlerOver: 0,
      currentOverBowlRun: 0,
      currentOverBowlWickets: 0,
      isFirstSessionCompleted: false,
    };
  }

  componentDidMount() {
    let path = "/liveMatchList/" + this.state.matchId;
    this.refreshBatsmanData(path);
    // database().ref(path)
    //   .orderByValue()
    //   .once("value")
    //   .then((result) => {
    //     let resultJson = JSON.parse(JSON.stringify(result));
    //     this.updateLiveData(resultJson)
    //   });
  }

  updateLiveData(resultJson) {
    let isFirstSessionCompleted =
      resultJson.isFirstSessionCompleted !== undefined &&
      resultJson.isFirstSessionCompleted !== null &&
      resultJson.isFirstSessionCompleted === true;
    let overs = resultJson.batFirstTeamId === resultJson.teamFirstId ?
      resultJson.teamFirstInning.overs : resultJson.teamSecondInning.overs;
    let wickets = resultJson.batFirstTeamId === resultJson.teamFirstId ?
      resultJson.teamFirstInning.wickets : resultJson.teamSecondInning.wickets;
    let bowlerData = null;
    if (!isFirstSessionCompleted) {
      if (overs >= resultJson.noOfOvers) {
        isFirstSessionCompleted = true;
        this.setState({
          isFirstSessionCompleted: true,
        });
      }
    }

    let wonToss = "";
    if (resultJson.batFirstTeamId === resultJson.teamFirstId) {
      wonToss = resultJson.teamFirstName + " won the toss and elected to bat";
    } else {
      wonToss = resultJson.teamSecondName + " won the toss and elected to bowl";
    }
    let score = resultJson.batFirstTeamId === resultJson.teamFirstId ?
      resultJson.teamFirstInning.score : resultJson.teamSecondInning.score;

    let extra = resultJson.batFirstTeamId === resultJson.teamFirstId ?
      resultJson.teamFirstInning.extra ?
        resultJson.teamFirstInning.extra : 0 :
      resultJson.teamSecondInning.extra ?
        resultJson.teamSecondInning.extra : 0;

    let currentOverBowl = resultJson.currentOverBowl !== undefined ? resultJson.currentOverBowl : 0;
    let currentOverBowlerOver = resultJson.currentOverBowlerOver !== undefined ?
      resultJson.currentOverBowlerOver : 0;
    let currentOverBowlWickets = resultJson.wickets !== undefined ?
      resultJson.wickets : 0;
    let currentOverBowlRun = resultJson.currentOverBowlRun !== undefined ? resultJson.currentOverBowlRun : 0;
    if (resultJson.batFirstTeamId === resultJson.teamFirstId) {
      //TODO: Bowler
      bowlerData = resultJson.teamSecondSquad.filter(
        (item) => item.bowlingIndex === 1);
      currentOverBowl = bowlerData[0].currentOverBowl !== undefined ? bowlerData[0].currentOverBowl : 0;
      currentOverBowlRun = bowlerData[0].currentOverBowlRun !== undefined ? bowlerData[0].currentOverBowlRun : 0;
      currentOverBowlerOver = bowlerData[0].currentOverBowlerOver !== undefined ? bowlerData[0].currentOverBowlerOver : 0;
      currentOverBowlWickets = bowlerData[0].wickets !== undefined ? bowlerData[0].wickets : 0;
    } else {
      //TODO: Bowler
      bowlerData = resultJson.teamFirstSquad.filter(
        (item) => item.bowlingIndex === 1);
      currentOverBowl = bowlerData[0].currentOverBowl !== undefined ? bowlerData[0].currentOverBowl : 0;
      currentOverBowlerOver = bowlerData[0].currentOverBowlerOver !== undefined ? bowlerData[0].currentOverBowlerOver : 0;
      currentOverBowlRun = bowlerData[0].currentOverBowlRun !== undefined ? bowlerData[0].currentOverBowlRun : 0;
      currentOverBowlWickets = bowlerData[0].wickets !== undefined ? bowlerData[0].wickets : 0;
    }

    let currentOverRun = resultJson.currentOverRun !== undefined ? resultJson.currentOverRun : [];
    let batsman1 = null;
    let batsman2 = null;
    let batsman1Runs = 0;
    let batsman2Runs = 0;
    let batsman1Bowls = 0;
    let batsman2Bowls = 0;
    let isStriker = false;
    let strikerPlayerIndex;
    let nonStrikerPlayerIndex;

    if (resultJson.batFirstTeamId === resultJson.teamFirstId) {
      strikerPlayerIndex = resultJson.teamFirstSquad.findIndex(
        (item) =>
          item.isStriker !== undefined &&
          item.isStriker);
      console.log("strikerPlayerIndex: ", strikerPlayerIndex);
      batsman1 = resultJson.teamFirstSquad[strikerPlayerIndex];
      batsman1Runs = resultJson.teamFirstSquad[strikerPlayerIndex].run !== undefined ?
        resultJson.teamFirstSquad[strikerPlayerIndex].run : 0;
      batsman1Bowls = resultJson.teamFirstSquad[strikerPlayerIndex].bowl !== undefined ?
        resultJson.teamFirstSquad[strikerPlayerIndex].bowl : 0;
      isStriker = resultJson.teamFirstSquad[strikerPlayerIndex].isStriker !== undefined ?
        resultJson.teamFirstSquad[strikerPlayerIndex].isStriker : false;

      nonStrikerPlayerIndex = resultJson.teamFirstSquad.findIndex(
        (item) =>
          item.isStriker !== undefined &&
          !item.isStriker);
      batsman2 = resultJson.teamFirstSquad[nonStrikerPlayerIndex];
      batsman2Runs = resultJson.teamFirstSquad[nonStrikerPlayerIndex].run !== undefined ?
        resultJson.teamFirstSquad[nonStrikerPlayerIndex].run : 0;
      batsman2Bowls = resultJson.teamFirstSquad[nonStrikerPlayerIndex].bowl !== undefined ?
        resultJson.teamFirstSquad[nonStrikerPlayerIndex].bowl : 0;

      //TODO: Bowler


    } else {
      strikerPlayerIndex = resultJson.teamSecondSquad.findIndex(
        (item) => item.strikerIndex === 1);
      batsman1 = resultJson.teamSecondSquad[strikerPlayerIndex];
      batsman1Runs = resultJson.teamSecondSquad[strikerPlayerIndex].run !== undefined ?
        resultJson.teamSecondSquad[strikerPlayerIndex].run : 0;
      batsman1Bowls = resultJson.teamSecondSquad[strikerPlayerIndex].bowl !== undefined ?
        resultJson.teamSecondSquad[strikerPlayerIndex].bowl : 0;
      isStriker = resultJson.teamSecondSquad[strikerPlayerIndex].isStriker !== undefined ?
        resultJson.teamSecondSquad[strikerPlayerIndex].isStriker : false;

      nonStrikerPlayerIndex = resultJson.teamSecondSquad.findIndex(
        (item) => item.strikerIndex === 2);
      batsman2 = resultJson.teamSecondSquad[nonStrikerPlayerIndex];
      batsman2Runs = resultJson.teamSecondSquad[nonStrikerPlayerIndex].run !== undefined ?
        resultJson.teamSecondSquad[nonStrikerPlayerIndex].run : 0;
      batsman2Bowls = resultJson.teamSecondSquad[nonStrikerPlayerIndex].bowl !== undefined ?
        resultJson.teamSecondSquad[nonStrikerPlayerIndex].bowl : 0;
    }
    // console.log("batsman1: ", batsman1);
    // console.log("batsman2: ", batsman2);
    if (bowlerData.length > 0) {
      bowlerData = bowlerData[0];
    } else {
      bowlerData = null;
    }
    console.log("bowlerData: ", bowlerData);
    // this.refreshBatsmanData(path,batsman1.id)
    if (currentOverRun.length >= 6) {
      this.setState({
        isStrikerSelection: isStriker,
        isSelectBowlingModel: true,
        batsman1: batsman1,
        batsman2: batsman2,
        bowlerData: bowlerData,
        currentOverRun: [],
        overs: overs,
        wickets: wickets,
        currentOverBowl: 0,
        currentOverBowlWickets: 0,
        currentOverBowlRun: currentOverBowlRun,
        batsman1Runs: batsman1Runs,
        runs: score,
        extra: extra,
        batsman2Runs: batsman2Runs,
        batsman1Bowls: batsman1Bowls,
        batsman2Bowls: batsman2Bowls,
        totalOvers: resultJson.noOfOvers,
        batFirstTeamId: resultJson.batFirstTeamId,
        wonToss: wonToss,
      });
    } else {
      this.setState({
        isStrikerSelection: isStriker,
        batsman1: batsman1,
        batsman2: batsman2,
        bowlerData: bowlerData,
        batsman1Runs: batsman1Runs,
        runs: score,
        extra: extra,
        currentOverBowl: currentOverBowl,
        currentOverBowlRun: currentOverBowlRun,
        currentOverBowlerOver: currentOverBowlerOver,
        currentOverBowlWickets: currentOverBowlWickets,
        overs: overs,
        wickets: wickets,
        currentOverRun: currentOverRun,
        batsman2Runs: batsman2Runs,
        batsman1Bowls: batsman1Bowls,
        batsman2Bowls: batsman2Bowls,
        totalOvers: resultJson.noOfOvers,
        batFirstTeamId: resultJson.batFirstTeamId,
        wonToss: wonToss,
      }, () => {
      });
    }
  }

  refreshBatsmanData(path) {
    console.log("path: ", path);
    // console.log("id: ", id);
    database()
      .ref(`${path}`)
      .on("value", snapshot => {
        console.log("User data: ", snapshot.val());
        this.updateLiveData(snapshot.val());
      });
  }

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
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 0,
            }}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Image
              resizeMode={"cover"}
              style={{
                width: 20, height: 18,
                alignSelf: "center",
                marginStart: 15,
              }} source={require("../assets/images/ic_back.png")} />
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: fontStyle.MontserratBold,
              fontSize: 20,
              color: colors.WHITE,
            }}>{Constants.APP_TITLE}</Text>
        </View>
        <View style={{
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: colors.WHITE,
        }}>
          <View style={{
            flexDirection: "column",
            paddingBottom: 15,
            paddingTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            marginStart: 10,
            marginEnd: 10,
            borderRadius: 8,
            borderWidth: 1.5,
            borderColor: "rgba(2,79,39,0.1)",
          }}>

            <View style={{
              flexDirection: "row",
            }}>
              {
                this.state.item.teamFirstImage !== null ?
                  this.state.item.teamFirstImage !== "" ?
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={{ uri: "https://www.goldendc.demourl.ca/public/uploaded/images/" + this.state.item.teamFirstImage }} />
                    :
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={require("../assets/images/ic_top_logo.png")} />
                  :
                  <ImageBackground
                    resizeMode={"cover"}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                    }} source={require("../assets/images/ic_rond_gradiant.png")}>
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 20,
                        height: 20,
                      }} source={require("../assets/images/ic_top_logo.png")} />
                  </ImageBackground>
              }

              <View style={{
                flexDirection: "column",
              }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratMedium,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  this.state.item.teamFirstName
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratBold,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  !this.state.isFirstSessionCompleted ?
                    this.state.runs + "/" + this.state.wickets
                    : this.state.item.teamFirstInning.score + "/" + this.state.item.teamFirstInning.wickets
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratRegular,
                    fontSize: 10,
                    color: colors.BLACK,
                  }}>{
                  this.state.item.teamFirstInning.overs + " Ov"
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
                flex:1,
                alignItems:'flex-end',
                // backgroundColor:'red',
                marginEnd:10,
                flexDirection: "column",
              }}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratMedium,
                    fontSize: 10,
                    color: colors.BLUE_COLOR,
                  }}>{
                  this.state.item.teamSecondName
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratBold,
                    fontSize: 10,
                    color: colors.BLACK_0B,
                  }}>{
                  this.state.item.teamSecondInning.score + "/" + this.state.item.teamSecondInning.wickets
                }</Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: fontStyle.MontserratRegular,
                    fontSize: 10,
                    color: colors.BLACK_0B,
                  }}>{
                  this.state.item.teamSecondInning.overs + " Ov"
                }</Text>
              </View>
              {
                this.state.item.teamSecondImage !== null ?
                  this.state.item.teamSecondImage !== "" ?
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={{ uri: "https://www.goldendc.demourl.ca/public/uploaded/images/" + this.state.item.teamSecondImage }} />
                    :
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        // marginEnd: 10
                      }}
                      source={require("../assets/images/ic_top_logo.png")} />
                  :
                  <ImageBackground
                    resizeMode={"cover"}
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center",
                    }} source={require("../assets/images/ic_rond_gradiant.png")}>
                    <Image
                      resizeMode={"cover"}
                      style={{
                        width: 20,
                        height: 20,
                      }} source={require("../assets/images/ic_top_logo.png")} />
                  </ImageBackground>
              }
            </View>
          </View>
        </View>
        <Text
          style={{
            backgroundColor: colors.STATUS_BAR_COLOR,
            paddingStart: 10,
            paddingTop: 12,
            paddingBottom: 12,
            fontFamily: fontStyle.MontserratBold,
            fontSize: 15,
            color: colors.WHITE,
          }}>{
          this.state.item.teamFirstName + " Inning"
        }</Text>
        <View style={{
          flex: 1,
          backgroundColor: colors.WHITE,
        }}>
          {/* First inning batting */}
          <View style={{
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: "rgba(118,176,67,0.1)",
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{
              Constants.BATSMAN
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "R"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "B"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "4s"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "6s"
            }</Text>
          </View>
          <View style={{
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: colors.WHITE,
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman1 !== undefined &&
              this.state.batsman1 !== null ?
                this.state.batsman1.isStriker ?
                  this.state.batsman1.name + "*" :
                  this.state.batsman1.name
                : ""
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman1 !== undefined &&
              this.state.batsman1 !== null &&
              this.state.batsman1.run !== undefined &&
              this.state.batsman1.run !== null ?
                this.state.batsman1.run : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman1 !== undefined &&
              this.state.batsman1 !== null &&
              this.state.batsman1.bowl !== undefined &&
              this.state.batsman1.bowl !== null ?
                this.state.batsman1.bowl : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman1 !== undefined &&
              this.state.batsman1 !== null &&
              this.state.batsman1.four !== undefined &&
              this.state.batsman1.four !== null ?
                this.state.batsman1.four : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman1 !== undefined &&
              this.state.batsman1 !== null &&
              this.state.batsman1.six !== undefined &&
              this.state.batsman1.six !== null ?
                this.state.batsman1.six : "0"
            }</Text>
          </View>
          <View style={{
            paddingBottom: 10,
            backgroundColor: colors.WHITE,
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman2 !== undefined &&
              this.state.batsman2 !== null ?
                this.state.batsman2.isStriker ?
                  this.state.batsman2.name + "*" :
                  this.state.batsman2.name
                : ""
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman2 !== undefined &&
              this.state.batsman2 !== null &&
              this.state.batsman2.run !== undefined &&
              this.state.batsman2.run !== null ?
                this.state.batsman2.run : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman2 !== undefined &&
              this.state.batsman2 !== null &&
              this.state.batsman2.bowl !== undefined &&
              this.state.batsman2.bowl !== null ?
                this.state.batsman2.bowl : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman2 !== undefined &&
              this.state.batsman2 !== null &&
              this.state.batsman2.four !== undefined &&
              this.state.batsman2.four !== null ?
                this.state.batsman2.four : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.batsman2 !== undefined &&
              this.state.batsman2 !== null &&
              this.state.batsman2.six !== undefined &&
              this.state.batsman2.six !== null ?
                this.state.batsman2.six : "0"
            }</Text>
          </View>
          <View style={{
            paddingBottom: 10,
            backgroundColor: colors.WHITE,
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{Constants.EXTRA}</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{this.state.extra}</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{""}</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{""}</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{""}</Text>
          </View>

          <View style={{
            paddingBottom: 10,
            backgroundColor: colors.WHITE,
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 1.3,
                // backgroundColor: "red",
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{Constants.TOTAL}</Text>
            <View style={{
              flex: 1,
              flexDirection:'row'
            }}>
              <Text
                style={{
                  fontFamily: fontStyle.MontserratBold,
                  fontSize: 12,
                  alignSelf: "center",
                  color: colors.STATUS_BAR_COLOR,
                }}>{
                !this.state.isFirstSessionCompleted ?
                  this.state.runs
                  : this.state.item.teamFirstInning.score}</Text>
              <Text
                style={{
                  marginStart:3,
                  fontFamily: fontStyle.MontserratRegular,
                  fontSize: 12,
                  alignSelf: "center",
                  color: colors.STATUS_BAR_COLOR,
                }}>{
                !this.state.isFirstSessionCompleted ?
                  "(" + this.state.wickets + "Wkt, "+this.state.overs+" OV)"
                  : "(" + this.state.item.teamFirstInning.wickets + "Wkt, "+
                  this.state.item.teamFirstInning.wickets +" OV)"}</Text>
            </View>

          </View>

          {/*Bowler Details*/}
          <View style={{
            paddingTop: 8,
            paddingBottom: 8,
            backgroundColor: "rgba(118,176,67,0.1)",
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{
              Constants.BOWLER
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "O"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "R"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              "W"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              ""
            }</Text>
          </View>
          <View style={{
            paddingTop: 8,
            paddingBottom: 8,
            // backgroundColor: "rgba(118,176,67,0.1)",
            flexDirection: "row",
          }}>
            <Text
              style={{
                flex: 6,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 15,
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.bowlerData !== undefined &&
              this.state.bowlerData !== null ?
              this.state.bowlerData.name : ""
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratBold,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.bowlerData !== undefined &&
              this.state.bowlerData !== null ?
                this.state.bowlerData.currentOverBowl>=6?
                this.state.bowlerData.currentOverBowlerOver + ".0":
                  this.state.bowlerData.currentOverBowlerOver +
                  "."+this.state.bowlerData.currentOverBowl : ""
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.bowlerData !== undefined &&
              this.state.bowlerData !== null &&
              this.state.bowlerData.currentOverBowlRun !== undefined &&
              this.state.bowlerData.currentOverBowlRun !== null ?
                this.state.bowlerData.currentOverBowlRun : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              this.state.bowlerData !== undefined &&
              this.state.bowlerData !== null &&
              this.state.bowlerData.wickets !== undefined &&
              this.state.bowlerData.wickets !== null ?
                this.state.bowlerData.wickets : "0"
            }</Text>
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                fontFamily: fontStyle.MontserratMedium,
                fontSize: 12,
                alignSelf: "center",
                color: colors.STATUS_BAR_COLOR,
              }}>{
              ""
            }</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default LiveMatchScreen;
