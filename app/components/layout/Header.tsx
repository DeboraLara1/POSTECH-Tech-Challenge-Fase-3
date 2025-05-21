import { Link, usePathname, useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Pressable, useWindowDimensions } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 768);
  }, [width]);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateTo = (path: string) => {
    router.replace(path);
    setMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Banco</Text>
        <Text style={[styles.logoText, styles.logoHighlight]}>Digital</Text>
      </View>

      {!isMobile && (
        <View style={styles.navContainer}>
          <Link href="/minha-conta" asChild>
            <TouchableOpacity style={[styles.navItem, pathname === '/minha-conta' && styles.activeNavItem]}>
              <Text style={[styles.navText, pathname === '/minha-conta' && styles.activeNavText]}>Minha Conta</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/investments" asChild>
            <TouchableOpacity style={[styles.navItem, pathname === '/investments' && styles.activeNavItem]}>
              <Text style={[styles.navText, pathname === '/investments' && styles.activeNavText]}>Investimentos</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/meus-cartoes" asChild>
            <TouchableOpacity style={[styles.navItem, pathname === '/meus-cartoes' && styles.activeNavItem]}>
              <Text style={[styles.navText, pathname === '/meus-cartoes' && styles.activeNavText]}>Meus Cartões</Text>
            </TouchableOpacity>
          </Link>
          
          <TouchableOpacity style={styles.navItem} onPress={handleLogout}>
            <Text style={styles.navText}>Sair</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <View style={styles.menuIcon}></View>
        <View style={styles.menuIcon}></View>
        <View style={styles.menuIcon}></View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
          <View style={styles.menuModal} onStartShouldSetResponder={() => true}>
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
              <TouchableOpacity onPress={() => setMenuVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/(protected)/dashboard')}>
              <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/(protected)/minha-conta')}>
              <Text style={styles.menuItemText}>Minha Conta</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/(protected)/investments')}>
              <Text style={styles.menuItemText}>Investimentos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateTo('/(protected)/meus-cartoes')}>
              <Text style={styles.menuItemText}>Meus Cartões</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.menuItem, styles.logoutMenuItem]} onPress={handleLogout}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004d61',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#003d4e',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoHighlight: {
    color: '#fff',
    marginLeft: 4,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 10,
  },
  navItem: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
  activeNavText: {
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    width: 20,
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuModal: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#004d61',
  },
  closeButton: {
    fontSize: 22,
    color: '#004d61',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutMenuItem: {
    marginTop: 30,
    backgroundColor: '#004d61',
    borderRadius: 5,
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 2,
  },
});

export default Header; 