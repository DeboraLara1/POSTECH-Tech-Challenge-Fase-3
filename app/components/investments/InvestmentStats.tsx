import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native';
import { getInvestmentData } from '../../services/investmentService';
import Svg, { G, Path, Circle } from 'react-native-svg';

const COLORS = [
  '#2D9CDB', 
  '#9B51E0',
  '#F2994A', 
  '#EB5757', 
];

const LEGEND = [
  { label: 'Fundos de investimento', color: COLORS[0] },
  { label: 'Tesouro Direto', color: COLORS[1] },
  { label: 'Previdência Privada', color: COLORS[2] },
  { label: 'Bolsa de Valores', color: COLORS[3] },
];

const PIE_DATA = [36, 28, 18, 18]; 

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
  return d;
}

function DonutChart({ size = 140, strokeWidth = 24, data = PIE_DATA, colors = COLORS }) {
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const total = data.reduce((a, b) => a + b, 0);
  let startAngle = 0;

  return (
    <Svg width={size} height={size}>
      <G rotation="-90" origin={`${center},${center}`}>
        {data.map((value, i) => {
          const angle = (value / total) * 360;
          const endAngle = startAngle + angle;
          const d = describeArc(center, center, radius, startAngle, endAngle);
          const path = `${d}`;
          const color = colors[i];
          const key = `arc-${i}`;
          startAngle += angle;
          return (
            <Path
              key={key}
              d={path}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />
          );
        })}
      </G>
      <Circle cx={center} cy={center} r={radius - strokeWidth / 2} fill="#13576a" />
    </Svg>
  );
}

const InvestmentStats = () => {
  const { width } = useWindowDimensions();
  const [investmentData, setInvestmentData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInvestmentData();
        setInvestmentData(data);
      } catch (err) {
        setError('Erro ao carregar dados de investimento');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.card, { width: width * 0.95, alignItems: 'center', justifyContent: 'center', height: 300 }]}> 
        <ActivityIndicator size="large" color="#004d61" />
      </View>
    );
  }

  if (error || !investmentData) {
    return (
      <View style={[styles.card, { width: width * 0.95, alignItems: 'center', justifyContent: 'center', height: 300 }]}> 
        <Text style={{ color: '#222' }}>{error || 'Dados não disponíveis.'}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.card, { width: width * 0.95 }]}> 
      <Text style={styles.title}>Investimentos</Text>
      <Text style={styles.total}>Total: <Text style={styles.totalValue}>{investmentData.totalValue}</Text></Text>
      <View style={styles.boxInvestimento}>
        <Text style={styles.boxTitle}>{investmentData.fixedIncome.title}</Text>
        <Text style={styles.boxValue}>{investmentData.fixedIncome.value}</Text>
      </View>
      <View style={styles.boxInvestimento}>
        <Text style={styles.boxTitle}>{investmentData.variableIncome.title}</Text>
        <Text style={styles.boxValue}>{investmentData.variableIncome.value}</Text>
      </View>
      <Text style={styles.estatisticasTitle}>Estatísticas</Text>
      <View style={styles.statsCard}>
        <DonutChart size={110} />
        <View style={styles.legends}>
          {LEGEND.map((item, i) => (
            <View key={i} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: item.color }]} />
              <Text style={styles.legendLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#e6ece7',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  total: {
    fontSize: 16,
    color: '#2D9CDB',
    marginBottom: 18,
    alignSelf: 'flex-start',
  },
  totalValue: {
    fontSize: 22,
    color: '#2D9CDB',
    fontWeight: 'bold',
  },
  boxInvestimento: {
    backgroundColor: '#13576a',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 14,
    width: '100%',
  },
  boxTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  boxValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  estatisticasTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 18,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  statsCard: {
    backgroundColor: '#13576a',
    borderRadius: 10,
    padding: 18,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
    minHeight: 220,
    justifyContent: 'center',
  },
  legends: {
    marginTop: 18,
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendLabel: {
    fontSize: 14,
    color: '#fff',
  },
});

export default InvestmentStats; 