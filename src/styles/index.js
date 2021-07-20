import {StyleSheet} from 'react-native';
import colors from '../colors';
import {Width, Height} from '../Dimensions';

const styles = StyleSheet.create({
  //overall styles
  container: {
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  marginVertical: {
    marginVertical: 4,
  },
  categoriesWrap: {
    // wrapping of categoriescards
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  //--------------------overall styles

  //HeaderStyles
  logo: {
    height: 50,
    width: 50,
  },
  addressView: {
    borderRadius: 8,
    backgroundColor: colors.white,
    flex: 1.5,
    padding: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  address1: {
    fontSize: 12,
    color: colors.primary,
  },
  address2: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
  },
  notificationView: {
    backgroundColor: colors.white,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50,
  },
  welcomeText: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  //-----------------HeaderStyles

  // popular Categories

  popularCategoriesView: {
    marginVertical: 16,
  },
  titleTextStyles: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  //each cards in popularcategories

  popularCategoryCard: {
    // margin: 4,
    marginVertical: 4,
    width: Width / 3.5,
    height: Height / 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardName: {
    color: colors.text_secondary,
    fontSize: 16,
  },
  // ----------------popular Categories

  // worker finder view( couldnt find the worker you where looking for?)
  workerFinderView: {
    backgroundColor: colors.yellow,
    padding: 10,
    borderRadius: 8,
    height: Height / 6,
    justifyContent: 'space-between',
  },
  WORKERFINDER_1Text: {
    fontSize: 20,
    color: colors.text_primary,
    fontWeight: 'bold',
  },
  WORKERFINDER_2Text: {
    fontSize: 10,
    color: colors.text_secondary,
  },
  clickHereButton: {
    borderWidth: 1,
    borderColor: colors.bluevariant1,
    borderRadius: 4,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: Width / 5,
  },
  WORKERFINDER_3Text: {
    color: colors.bluevariant1,
    fontSize: 10,
    fontWeight: 'bold',
  },
  //-------------worker finder view

  //profilecompleted styles

  profileCompletedView: {
    backgroundColor: colors.lightblue,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
    justifyContent: 'space-between',
    height: Height / 6,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text_primary,
  },
  addDetailsButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
    backgroundColor: colors.lightblue,
    alignItems: 'center',
    justifyContent: 'center',
    width: Width / 5,
  },
  addDetailsButtonView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  addDetailsButtonText: {fontSize: 10},
  //----------------profilecompleted styles

  //support button
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 4,
    backgroundColor: colors.blue,
    width: Width / 3,
    height: Height / 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  //-----------------support button

  // all categories
  allCategoryTitleView: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allCategoryTitleText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '800',
  },
  A_style: {
    fontSize: 24,
    backgroundColor: colors.bluevariant2,
    color: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  // each cards in all categories
  allCategorycardview: {
    backgroundColor: colors.white,
    width: Width / 3.6,
    height: Height / 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  allCategorycarTitle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: colors.primary,
  },
  bottomCardColorView: {
    backgroundColor: colors.lightblue,
    height: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  // -------------------all categories

  // bottomtab styles
  bottomTabView: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: colors.white,
    marginHorizontal: -16,
    justifyContent: 'space-evenly',
  },
  //each Tab item
  tabItemView: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  borderRadius: {
    borderRadius: 32,
  },
  itemTitle: {
    textAlign: 'center',
    color: colors.grey,
  },
});

export default styles;
