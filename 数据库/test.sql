/*
Navicat MySQL Data Transfer

Source Server         : R_L
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2020-09-05 15:32:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for milktea
-- ----------------------------
DROP TABLE IF EXISTS `milktea`;
CREATE TABLE `milktea` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `des` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of milktea
-- ----------------------------
INSERT INTO `milktea` VALUES ('0002', '多肉芒芒甘露', '经典芒芒与杨枝甘露的灵感碰撞，精选清幽绿妍茶底，爆汁红柚粒撞上大块芒肉。', '27', '1', '果茶家族');
INSERT INTO `milktea` VALUES ('0003', '芝芝桃桃', '精选当季水蜜桃搭配金玉茶底制作而成，不使用任何香精等添加剂，不使用任何罐头水果。粉色为火龙果天然调色。若有小黑点，是火龙果籽，可放心食用。', '30', '1', '果茶家族');
INSERT INTO `milktea` VALUES ('0004', '芝芝绿妍', '精品定制绿茶，较普通绿茶，少了几分涩气，口感清澈，茉莉香气馥郁怡人。', '19', '2', '茗茶/牛乳');
INSERT INTO `milktea` VALUES ('0005', '芝芝金玉', '精品定制乌龙，清新茶香中带有桂花香和淡淡的乳香，馥郁迷人。', '22', '2', '茗茶/牛乳');
INSERT INTO `milktea` VALUES ('0006', '豆豆波波茶', '选用嫣红茶底。浓厚黄豆粉、芋圆波波搭配秘制豆乳奶盖，底部藏有滑嫩豆花。饮用秘籍：1.舀起顶部小丸子和豆奶盖先尝，2.吸管一插到底，再吸豆花与奶茶。', '27', '3', '波波家族');
INSERT INTO `milktea` VALUES ('0007', '芋泥波波牛乳', '本品含有芋头，过敏人士请谨慎选择。因芋泥容易氧化，为保持最佳体验，请务必于一小时内饮用完毕。新鲜芋泥融入顺滑冷藏牛乳，再加入颗颗Q弹的芋泥波波，绵密与润泽，尽在这一杯。', '27', '3', '波波家族');
INSERT INTO `milktea` VALUES ('0008', '芝芝咖啡', '意式奶咖与浓香芝士的默契结合，带来更浓郁的奶香。', '25', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0009', '雪山香草拿铁', '香草牛奶拿铁与香草奶油雪顶灵感碰撞，佐以酥脆可口的碧根果碎，散发出柔和的坚果香及奶香。', '29', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0010', '芝芝莓莓', '选用定制草莓搭配清幽绿妍茶底新鲜现制，莓香满溢。如选择甜菊糖，遇酸性水果会产生泡沫，属正常现象。', '32', '1', '果茶家族');
INSERT INTO `milktea` VALUES ('0011', '芝芝莓莓桃', '莓莓与桃桃的首次灵感混搭。莓莓沁入桃汁，搭配清雅绿妍与浓醇芝士，一次喝到两款人气饮品。', '31', '1', '果茶家族');
INSERT INTO `milktea` VALUES ('0012', '满杯红柚', '精选饱满红柚果粒入茶，清幽绿妍茶底洋溢茉莉花香。冰沙减少了红柚的微苦，更凸显茶味。如选择甜菊糖，遇酸性水果会产生泡沫，属正常现象。', '25', '1', '果茶家族');
INSERT INTO `milktea` VALUES ('0013', '芝芝金凤茶王', '精品定制乌龙茶，香气碳焙浓郁，入喉回甘，茶香余韵不断。', '22', '2', '茗茶/牛乳');
INSERT INTO `milktea` VALUES ('0014', '烤黑糖波波牛乳', '黑糖珍珠搭配顺滑冷藏牛乳。波波系列奶味较为浓郁，不喜欢浓厚口感的朋友慎点。', '21', '3', '波波家族');
INSERT INTO `milktea` VALUES ('0015', '芝麻汤圆豆豆茶', '软糯可口的芝麻汤圆串串，搭配秘制豆豆奶盖和焙香芝麻粉更好味，黑芝麻奶底藏有芋圆波波，团圆芝喜，尽在一杯。', '27', '3', '波波家族');
INSERT INTO `milktea` VALUES ('0016', '奶茶波波冰', '经典奶茶回归，嫣红茶搭配牛乳打制细腻冰沙，黑糖波波和冰淇淋球的组合让口感层次更加丰富。', '27', '3', '波波家族');
INSERT INTO `milktea` VALUES ('0017', '椰椰谷物咖啡', '精品咖啡豆现磨萃出可可香气，加入谷物麦片搭配黄金椰片与香草奶油顶，口齿萦绕愉悦椰香，能量咖啡就这杯。', '28', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0018', '拿铁', '选用优质阿拉比卡咖啡豆拼配，现萃咖啡融入蒸煮牛奶，呈现经典拿铁的香纯。', '19', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0019', '咖啡波波冰', '现萃Espresso沁入细密冰沙，佐以Q弹黑糖波波，混搭出新格调。', '25', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0020', '美式', '选用优质阿拉比卡咖啡豆拼配，原豆现磨，冲泡出纯粹饱满的咖啡香气。', '13', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0021', '香柠咖啡', '当香浓醇厚的浓缩咖啡遇上清爽酸甜的柠檬滋味，给您带来与众不同夏日咖啡感受。', '16', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0022', '法式奶霜咖啡', '选用进口淡奶油制成绵密乳霜，加入醇香的现磨咖啡，香浓绵滑多层次的口感，融合在味蕾中的幸福感受。', '17', '4', '醇香咖啡');
INSERT INTO `milktea` VALUES ('0001', '多肉葡萄', '当季巨峰葡萄回归，颗颗手剥，保留果肉完整口感。搭配清雅绿妍茶底与醇香芝士，鲜爽可口。如选择甜菊糖，遇酸性水果会产生泡沫，属正常现象。\r\n', '29', '1', '果茶家族');

-- ----------------------------
-- Table structure for ordertable
-- ----------------------------
DROP TABLE IF EXISTS `ordertable`;
CREATE TABLE `ordertable` (
  `userName` varchar(255) DEFAULT NULL,
  `drinkId` varchar(255) DEFAULT NULL,
  `drinkName` varchar(255) DEFAULT NULL,
  `drinkInfo` varchar(255) DEFAULT NULL,
  `drinkPrice` double(11,0) DEFAULT NULL,
  `drinkNum` int(11) DEFAULT NULL,
  `orderTime` datetime DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `pickId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ordertable
-- ----------------------------
INSERT INTO `ordertable` VALUES ('amy', '0002', '多肉芒芒甘露', '常规吸管,标准糖,正常冰', '27', '1', '2020-09-05 10:28:17', '120', '128');
INSERT INTO `ordertable` VALUES ('amy', '0003', '芝芝桃桃', '常规吸管,标准糖,正常冰', '30', '1', '2020-09-05 10:30:06', '121', '129');
INSERT INTO `ordertable` VALUES ('amy', '0012', '满杯红柚', '常规吸管,标准糖,正常冰', '25', '1', '2020-09-05 10:31:30', '122', '130');
INSERT INTO `ordertable` VALUES ('amy', '0010', '芝芝莓莓', '常规吸管,标准糖,正常冰', '32', '1', '2020-09-05 10:53:36', '123', '131');
INSERT INTO `ordertable` VALUES ('amy', '0012', '满杯红柚', '常规吸管,标准糖,正常冰', '25', '1', '2020-09-05 10:53:36', '123', '131');
INSERT INTO `ordertable` VALUES ('amy', '0003', '芝芝桃桃', '0糖低卡糖,常规吸管,标准糖,正常', '31', '1', '2020-09-05 11:11:31', '124', '132');
INSERT INTO `ordertable` VALUES ('amy', '0017', '椰椰谷物咖啡', '常规吸管,微糖,正常', '28', '1', '2020-09-05 11:11:31', '124', '132');
INSERT INTO `ordertable` VALUES ('mike', '0001', '多肉葡萄', '常规吸管,标准糖,正常冰', '29', '1', '2020-09-05 15:21:11', '125', '133');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `pwd` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('bob', '12345678910', '111', '5', '男', '2020/09/05');
INSERT INTO `user` VALUES ('小兰', '15644826734', '222', '2', '女', '1993/01/04');
INSERT INTO `user` VALUES ('xixi', '15651992706', '111', '1', '女', '2008/09/10');
INSERT INTO `user` VALUES ('nana', '18709097764', '111', '5', '女', '1997/09/24');
INSERT INTO `user` VALUES ('周杰伦', '18744825674', '111', '2', '女', '1999/01/08');
INSERT INTO `user` VALUES ('mike', '22222222222', '222', '5', '男', '2020/09/05');
